<?php

namespace Drupal\aesirx_analytics\Controller;

use Drupal\aesirx_analytics\Form\AdminConfig\AesirxAnalyticsAdminConfigForm;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Implements Dashboard controler.
 *
 * @since 1.0.0
 */
class Dashboard extends ControllerBase {

  /**
   * Protected variable $requestStack.
   *
   * @var \Symfony\Component\HttpFoundation\Request
   */
  protected $requestStack;

  /**
   * Protected string variable $modulePath.
   */
  protected string $modulePath;

  /**
   * Implements create function.
   *
   * @param Symfony\Component\DependencyInjection\ContainerInterface $container
   *   Container Interface.
   *
   * @return mixed
   *   Return value is instance of the container.
   */
  public static function create(ContainerInterface $container) {
    $instance = parent::create($container);
    $instance->requestStack = $container->get('request_stack')
      ->getCurrentRequest();
    $instance->modulePath = $container->get('extension.list.module')
      ->getPath('aesirx_analytics');
    return $instance;
  }

  /**
   * Implements index function.
   *
   * @return array
   *   Returns an array with BI Dashboard information.
   */
  public function index() {
    $conf = $this->config(AesirxAnalyticsAdminConfigForm::SETTINGS);
    $host = $this->requestStack->getSchemeAndHttpHost();
    $protocols = ['http://', 'https://', 'http://www.', 'https://www.', 'www.'];
    $domain = str_replace($protocols, '', $host);
    $streams = [
      [
        'name' => $this->config('system.site')->get('name'),
        'domain' => $domain,
      ],
    ];
    $endpoint =
      ($conf->get('settings.first_party_server') ?? 'internal') == 'internal'
      ? $host
      : rtrim($conf->get('settings.domain') ?? '', '/');
    $clientId=$conf->get('settings.client_id');
    $clientSecret=$conf->get('settings.client_secret');
    $firstPartyServer=$conf->get('settings.first_party_server');
    return [
      '#theme' => 'bi-dashboard',
      '#content' => [
        'endpoint_url' => $endpoint,
        'data_stream' => json_encode($streams),
        'public_url' => $host . '/' . $this->modulePath,
        'client_id' => $clientId,
        'client_secret' => $clientSecret,
        'first_party_server' => $firstPartyServer,
      ],
    ];
  }

}
