/*
  # Update call_bookings table schema

  1. Changes
    - Add phone column (text, required)
    - Add business_name column (text, optional)
    - Add preferred_date column (date, required)
    - Add preferred_time column (text, required)
    - Add message column (text, optional)
    - Remove company column
    - Remove biggest_problem column

  2. Notes
    - This aligns the database schema with the booking form fields
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'company'
  ) THEN
    ALTER TABLE call_bookings DROP COLUMN company;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'biggest_problem'
  ) THEN
    ALTER TABLE call_bookings DROP COLUMN biggest_problem;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'phone'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN phone text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'business_name'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN business_name text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'preferred_date'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN preferred_date date NOT NULL DEFAULT CURRENT_DATE;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN preferred_time text NOT NULL DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'message'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN message text;
  END IF;
END $$;
