/*
  # Update Call Bookings Table

  1. Changes
    - Drop optional columns: phone, message, preferred_time
    - Make company column required (NOT NULL)
    - Add biggest_problem column (text, required)
    
  2. Security
    - RLS policies remain unchanged
*/

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'phone'
  ) THEN
    ALTER TABLE call_bookings DROP COLUMN phone;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'message'
  ) THEN
    ALTER TABLE call_bookings DROP COLUMN message;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE call_bookings DROP COLUMN preferred_time;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'call_bookings' AND column_name = 'biggest_problem'
  ) THEN
    ALTER TABLE call_bookings ADD COLUMN biggest_problem text NOT NULL DEFAULT '';
  END IF;
END $$;

ALTER TABLE call_bookings 
  ALTER COLUMN company SET NOT NULL,
  ALTER COLUMN company SET DEFAULT '';
