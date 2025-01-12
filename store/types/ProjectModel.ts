export interface Project {
  id: number;
  title: string;
  description: string;
  project_category_id: number;
  client_name: string;
  client_email: string;
  project_manager: string;
  start_date: string;
  end_date: string;
  budget: string;
  status: string;
  location: string;
  notes: string | null;
  images: string[]; // Parsed from JSON string
  banner: string;
  slug: string;
  attachments: string | null;
  created_at: string;
  updated_at: string;
}
