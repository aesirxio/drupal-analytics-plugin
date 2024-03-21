<?php

namespace Drupal\aesirx_analytics;

/**
 * AesirX Analytics Library Cli.
 *
 * @package AesirX_Analytics_Library
 *
 * @copyright Copyright (C) 2016 - 2023 Aesir. All rights reserved.
 * @license GNU General Public License version 2 or later; see LICENSE
 */

use AesirxAnalyticsLib\Cli\Env;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Database\Database;
use RuntimeException;

/**
 * Impelents CLI Env Factory.
 *
 * @since 1.0.0
 */
class CliEnvFactory {

  /**
   * Implements function getEnv().
   */
  public static function getEnv(
        ConfigFactoryInterface $configFactory,
        string $connection_key = 'default',
        string $connection_target = 'default',
    ): Env {

    $info = Database::getConnectionInfo($connection_key)[$connection_target] ?? NULL;

    if (!is_array($info)) {
      throw new RuntimeException('Database connection not found');
    }

    return new Env(
      $configFactory->get('aesirx_analytics.settings')
        ->get('settings.license') ?? '',
        $info['username'],
        urlencode($info['password']),
        $info['database'],
        $info['prefix'],
        $info['host'],
        $info['port'],
    );
  }

}
