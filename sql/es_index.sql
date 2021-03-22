CREATE UNIQUE INDEX compound_id
  ON es_accounts(compound_id);

CREATE INDEX provider_account_id
  ON es_accounts(provider_account_id);

CREATE INDEX provider_id
  ON es_accounts(provider_id);

CREATE INDEX user_id
  ON es_accounts(user_id);

CREATE UNIQUE INDEX session_token
  ON es_sessions(session_token);

CREATE UNIQUE INDEX access_token
  ON es_sessions(access_token);

CREATE UNIQUE INDEX email
  ON es_users(email);

CREATE UNIQUE INDEX token
  ON es_verification_requests(token);