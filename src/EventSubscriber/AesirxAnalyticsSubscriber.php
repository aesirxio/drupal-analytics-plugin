<?php

namespace Drupal\aesirx_analytics\EventSubscriber;

use AesirxAnalyticsLib\Cli\AesirxAnalyticsCli;
use AesirxAnalyticsLib\Exception\ExceptionWithErrorType;
use AesirxAnalyticsLib\Exception\ExceptionWithResponseCode;
use AesirxAnalyticsLib\RouterFactory;
use Drupal\aesirx_analytics\Route\Middleware\IsBackendMiddleware;
use Drupal\Core\Config\ConfigFactoryInterface;
use Pecee\SimpleRouter\Exceptions\NotFoundHttpException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Throwable;

/**
 * Implements Aesirx Analytics Subscriber class.
 *
 * @since 1.0.0
 */
class AesirxAnalyticsSubscriber implements EventSubscriberInterface {

  /**
   * Private Config Factory interface variable.
   *
   * @var Drupal\Core\Config\ConfigFactoryInterface
   */
  private ConfigFactoryInterface $configFactory;

  /**
   * Private Config Factory interface variable.
   *
   * @var AesirxAnalyticsLib\Cli\AesirxAnalyticsCli
   */
  private AesirxAnalyticsCli $cli;

  /**
   * Implements constructor.
   */
  public function __construct(
    ConfigFactoryInterface $configFactory,
    AesirxAnalyticsCli $cli,
    ) {
    $this->configFactory = $configFactory;
    $this->cli = $cli;
  }

  /**
   * Implements onRequest() function.
   */
  public function onRequest(RequestEvent $event) {
    if (
      ($this->configFactory->get('aesirx_analytics.settings')
        ->get('settings.1st_party_server') ?? 'internal') != 'internal'
    ) {
      return;
    }

    $callCommand = function (array $command): string {
      try {
        $process = $this->cli->processAnalytics($command);
      }
      catch (Throwable $e) {
        $code = 500;
        if ($e instanceof ExceptionWithErrorType) {
          switch ($e->getErrorType()) {
            case "NotFoundError":
              $code = 404;
              break;

            case "ValidationError":
              $code = 400;
              break;

            case "Rejected":
              $code = 406;
              break;

          }
        }

        throw new ExceptionWithResponseCode($e->getMessage(), $code, $e->getCode(), $e);
      }

      if (!headers_sent()) {
        header('Content-Type: application/json; charset=utf-8');
      }
      return $process->getOutput();
    };

    try {
      echo (new RouterFactory(
        $callCommand,
        new IsBackendMiddleware(),
        NULL,
        $event->getRequest()->getBaseUrl()
      ))
        ->getSimpleRouter()
        ->start();
    }
    catch (Throwable $e) {
      if ($e instanceof NotFoundHttpException) {
        return;
      }

      if ($e instanceof ExceptionWithResponseCode) {
        $code = $e->getResponseCode();
      }
      else {
        $code = 500;
      }

      if (!headers_sent()) {
        header('Content-Type: application/json; charset=utf-8');
      }
      http_response_code($code);
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
    }

    die();
  }

  /**
   * Implements getSubscribedEvents().
   *
   * @return array
   *   Returns an array with Subcribed Events.
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['onRequest', 100];

    return $events;
  }

}
