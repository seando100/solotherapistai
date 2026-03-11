import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import type { Json } from '@/integrations/supabase/types';

export interface AttorneyProfile {
  id: string;
  user_id: string;
  lawful_name: string;
  business_name?: string;
  practice_areas: string[];
  office_city: string;
  office_state: string;
  email: string;
  phone_number?: string;
  logo_url?: string;
  tagline?: string;
  client_greeting: string;
  disclaimers?: string;
  disclaimers_es?: string;
  vanity_slug?: string;
  intake_active: boolean;
  has_custom_practice_area?: boolean;
  unavailable_message?: string;
  intake_questions?: Array<{
    id: number;
    question: string;
    type: string;
    required: boolean;
    options?: string[];
    core_field?: string;
  }>;
  assistant_name?: string;
  // Calendly integration
  calendly_access_token?: string;
  calendly_refresh_token?: string;
  calendly_user_uri?: string;
  calendly_event_type_uri?: string;
  scheduling_url?: string;
}

export const useAttorneyProfile = (user: User | null) => {
  const [profile, setProfile] = useState<AttorneyProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('attorney_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      setProfile((data as unknown as AttorneyProfile) || null);
    } catch (error) {
      console.error('Error fetching attorney profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const createProfile = async (profileData: Omit<AttorneyProfile, 'id' | 'user_id'>) => {
    if (!user) throw new Error('User not authenticated');

    // Import default questions
    const { DEFAULT_INTAKE_QUESTIONS } = await import('@/components/admin/IntakeFormEditor');

    const { data, error } = await supabase
      .from('attorney_profiles')
      .upsert({
        user_id: user.id,
        ...profileData,
        intake_questions: DEFAULT_INTAKE_QUESTIONS as unknown as Json
      }, {
        onConflict: 'user_id'
      })
      .select()
      .single();

    if (error) throw error;
    
    setProfile(data as unknown as AttorneyProfile);
    return data as unknown as AttorneyProfile;
  };

  return {
    profile,
    loading,
    createProfile,
    refetch: fetchProfile
  };
};