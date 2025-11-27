/*
  # Create Call Bookings Table
  
  1. New Tables
    - `call_bookings`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Full name of the person booking
      - `email` (text) - Contact email
      - `phone` (text, optional) - Contact phone number
      - `company` (text, optional) - Company name
      - `message` (text, optional) - Additional message/details
      - `preferred_time` (text, optional) - Preferred call time
      - `created_at` (timestamptz) - Timestamp of booking
      
  2. Security
    - Enable RLS on `call_bookings` table
    - Add policy for inserting new bookings (public access for form submission)
    - Add policy for authenticated users to read all bookings
*/

CREATE TABLE IF NOT EXISTS call_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text,
  preferred_time text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE call_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit call booking"
  ON call_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view call bookings"
  ON call_bookings
  FOR SELECT
  TO authenticated
  USING (true);