/*
  # Update Newsletter Subscribers Table
  
  1. Changes
    - Drop existing table if it exists and recreate with better structure
    - `id` (uuid, primary key) - Unique identifier
    - `email` (text, unique, not null) - Subscriber email
    - `name` (text, optional) - Subscriber name
    - `subscribed` (boolean) - Subscription status
    - `created_at` (timestamptz) - Timestamp of subscription
    - `updated_at` (timestamptz) - Last update timestamp
      
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public to subscribe
    - Add policy for authenticated users to manage subscriptions
*/

DROP TABLE IF EXISTS newsletter_subscribers CASCADE;

CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update their subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);