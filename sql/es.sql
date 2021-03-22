CREATE TABLE IF NOT EXISTS `es_accounts`
  (
    `id`                   INT NOT NULL AUTO_INCREMENT,
    `compound_id`          VARCHAR(255) NOT NULL,
    `user_id`              INTEGER NOT NULL,
    `provider_type`        VARCHAR(255) NOT NULL,
    `provider_id`          VARCHAR(255) NOT NULL,
    `provider_account_id`  VARCHAR(255) NOT NULL,
    `refresh_token`        TEXT,
    `access_token`         TEXT,
    `access_token_expires` TIMESTAMP(6),
    `created_at`           TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at`           TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS `es_sessions`
  (
    `id`            INT NOT NULL AUTO_INCREMENT,
    `user_id`       INTEGER NOT NULL,
    `expires`       TIMESTAMP(6) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL,
    `access_token`  VARCHAR(255) NOT NULL,
    `created_at`    TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at`    TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS `es_users`
  (
    `id`             INT NOT NULL AUTO_INCREMENT,
    `name`           VARCHAR(255),
    `email`          VARCHAR(255),
    `email_verified` TIMESTAMP(6),
    `image`          VARCHAR(255),
    `password`       VARCHAR(255),
    `created_at`     TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at`     TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
  );

CREATE TABLE IF NOT EXISTS `es_verification_requests`
  (
    `id`         INT NOT NULL AUTO_INCREMENT,
    `identifier` VARCHAR(255) NOT NULL,
    `token`      VARCHAR(255) NOT NULL,
    `expires`    TIMESTAMP(6) NOT NULL,
    `created_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
  );