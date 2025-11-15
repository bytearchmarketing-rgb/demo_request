/*
  # Demo Requests Table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key): Unique identifier for each demo request
      - `email` (text): Contact email address
      - `full_name` (text): Full name of the requester
      - `phone` (text): Contact phone number
      - `company_name` (text): Name of the business
      - `city` (text): Metro Detroit city or suburb
      - `message` (text): Optional message or specific needs
      - `status` (text): Request status (pending, scheduled, completed, cancelled)
      - `booking_reference` (text, unique): Unique reference for tracking
      - `preferred_date` (date): Preferred demo date
      - `preferred_time` (text): Preferred time slot
      - `source` (text): Where the request came from
      - `ip_address` (text): IP for analytics
      - `created_at` (timestamptz): When request was submitted
      - `updated_at` (timestamptz): Last update timestamp
      - `scheduled_at` (timestamptz): When demo is scheduled

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for public to insert demo requests
    - Add policy for authenticated users to view all requests
    - Add policy for authenticated users to update request status

  3. Important Notes
    - Booking references are automatically generated and unique
    - Status defaults to 'pending' for new requests
    - Tracks Metro Detroit location for local focus
    - Supports flexible scheduling with date and time preferences
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  phone text,
  company_name text,
  city text,
  message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled')),
  booking_reference text UNIQUE DEFAULT substring(md5(random()::text || clock_timestamp()::text) from 1 for 10),
  preferred_date date,
  preferred_time text,
  source text DEFAULT 'website',
  ip_address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  scheduled_at timestamptz
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit demo request"
  ON demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update demo requests"
  ON demo_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_demo_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_created_at ON demo_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_demo_booking_ref ON demo_requests(booking_reference);
