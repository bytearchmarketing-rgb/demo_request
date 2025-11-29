/*
  # Make date and time fields optional in call_bookings

  1. Changes
    - Remove NOT NULL constraint from preferred_date column
    - Remove NOT NULL constraint from preferred_time column
    - Remove default values from these columns since they are now optional

  2. Notes
    - Users will provide contact info and we will reach out to schedule
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'preferred_date'
  ) THEN
    ALTER TABLE call_bookings ALTER COLUMN preferred_date DROP NOT NULL;
    ALTER TABLE call_bookings ALTER COLUMN preferred_date DROP DEFAULT;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE call_bookings ALTER COLUMN preferred_time DROP NOT NULL;
    ALTER TABLE call_bookings ALTER COLUMN preferred_time DROP DEFAULT;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'phone'
  ) THEN
    ALTER TABLE call_bookings ALTER COLUMN phone DROP NOT NULL;
    ALTER TABLE call_bookings ALTER COLUMN phone DROP DEFAULT;
  END IF;
END $$;
