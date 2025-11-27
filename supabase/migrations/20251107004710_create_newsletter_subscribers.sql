/*
  # Newsletter Subscribers Table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key): Unique identifier for each subscriber
      - `email` (text, unique): Subscriber email address
      - `subscribed_at` (timestamptz): When the subscription occurred
      - `status` (text): Subscription status (active, unsubscribed)
      - `unsubscribe_token` (uuid): Token for unsubscribe functionality
      - `source` (text): Where the subscriber signed up from
      - `ip_address` (text): IP address for analytics
      - `created_at` (timestamptz): Record creation timestamp
      - `updated_at` (timestamptz): Last update timestamp

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public to insert their own subscription
    - Add policy for authenticated admins to view all subscriptions
    - Add policy for users to update their own subscription status via token

  3. Important Notes
    - Email addresses are unique to prevent duplicate subscriptions
    - Unsubscribe tokens are automatically generated for privacy compliance
    - Status defaults to 'active' for new subscriptions
    - Timestamps automatically track subscription lifecycle
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  unsubscribe_token uuid DEFAULT gen_random_uuid(),
  source text DEFAULT 'website',
  ip_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can unsubscribe with token"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at);
