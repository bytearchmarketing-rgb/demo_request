/*
  # Create exit intent leads table

  This migration creates a table to store leads captured from the exit-intent modal popup.

  1. New Tables
    - `exit_intent_leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Name of the person submitting the form
      - `business` (text) - Name of their business
      - `contact` (text) - Email or phone number for contact
      - `created_at` (timestamptz) - Timestamp when the lead was captured
  
  2. Security
    - Enable RLS on `exit_intent_leads` table
    - Add policy for anonymous inserts (public can submit leads)
    - Add policy for authenticated users to view their submitted leads
    - No public read access to protect lead data
*/

CREATE TABLE IF NOT EXISTS exit_intent_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text NOT NULL,
  contact text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE exit_intent_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous users to insert leads"
  ON exit_intent_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all leads"
  ON exit_intent_leads
  FOR SELECT
  TO authenticated
  USING (true);
