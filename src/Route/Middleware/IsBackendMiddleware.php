<?php

namespace Drupal\aesirx_analytics\Route\Middleware;

use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request;
use Pecee\SimpleRouter\Exceptions\HttpException;

/**
 * Implements IsBackendMiddleware class.
 *
 * @since 1.0.0
 */
class IsBackendMiddleware implements IMiddleware {

  /**
   * Implements handle() function.
   *
   * @param Pecee\Http\Request $request
   *   HTTP request value.
   */
  public function handle(Request $request): void {
    if (!\Drupal::currentUser()->hasPermission('administer aesirx_analytics')) {
      throw new HttpException('Permission denied!', 403);
    }
  }

}
