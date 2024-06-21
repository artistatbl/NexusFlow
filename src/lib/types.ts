
export interface Domain {
  // id: string;
  // created_at: string;
  // user_id: string;
  // site_id: string;
  // site_name: string;
  // site_description: string;
  // site_subdomain: string;
  // site_logo: string | null;
  // site_cover_image: string | null;
  // site_custom_domain: string | null;
  // updated_at: string | null;

  id:   string ;
  name: string;
  description: string | null;
  icon: string;


  subdomain: string;

  //User: User | null
  userId: string | null
}
