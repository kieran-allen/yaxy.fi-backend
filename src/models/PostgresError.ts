import { PostgrestError as DatabaseError } from "@supabase/supabase-js";

export class PostgrestError extends Error {
  readonly hint: string;
  readonly code: string;
  readonly details: string;

  constructor(error: DatabaseError) {
    super(error.message)

    this.hint = error.hint
    this.code = error.code
    this.details = error.details
  }
}