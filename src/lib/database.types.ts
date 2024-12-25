export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          role: 'owner' | 'sitter'
          full_name: string | null
          avatar_url: string | null
          bio: string | null
          hourly_rate: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          role: 'owner' | 'sitter'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          hourly_rate?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'owner' | 'sitter'
          full_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          hourly_rate?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      pets: {
        Row: {
          id: string
          owner_id: string
          name: string
          type: string
          breed: string | null
          age: number | null
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          type: string
          breed?: string | null
          age?: number | null
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          type?: string
          breed?: string | null
          age?: number | null
          description?: string | null
          created_at?: string
        }
      }
      availability: {
        Row: {
          id: string
          sitter_id: string
          day_of_week: number
          start_time: string
          end_time: string
          created_at: string
        }
        Insert: {
          id?: string
          sitter_id: string
          day_of_week: number
          start_time: string
          end_time: string
          created_at?: string
        }
        Update: {
          id?: string
          sitter_id?: string
          day_of_week?: number
          start_time?: string
          end_time?: string
          created_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          owner_id: string
          sitter_id: string
          start_time: string
          end_time: string
          status: string
          total_amount: number
          commission_amount: number
          created_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          sitter_id: string
          start_time: string
          end_time: string
          status: string
          total_amount: number
          commission_amount: number
          created_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          sitter_id?: string
          start_time?: string
          end_time?: string
          status?: string
          total_amount?: number
          commission_amount?: number
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          booking_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment: string | null
          created_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          reviewer_id: string
          reviewee_id: string
          rating: number
          comment?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          reviewer_id?: string
          reviewee_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string
          booking_id: string | null
          content: string
          created_at: string
          read_at: string | null
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id: string
          booking_id?: string | null
          content: string
          created_at?: string
          read_at?: string | null
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string
          booking_id?: string | null
          content?: string
          created_at?: string
          read_at?: string | null
        }
      }
    }
  }
}