
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dpmlnysinyurcvotfsda.supabase.co'
const supabaseKey = "sb_publishable_stwewWlsxqrZLIosDlDqcQ_swuHIISx"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


