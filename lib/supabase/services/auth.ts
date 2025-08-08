import { client } from "../client";
import { serverClient } from "../server";

export class AuthService {
    static async signInWithEmail(email: string, password: string) {
        const supabase = client();
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    }

    static async signInWithOAuth(provider: 'github' | 'google' | 'apple') {
        // Note: The provider must be one of the supported OAuth providers configured in Supabase
        const supabase = client();
        const { data, error } = await supabase.auth.signInWithOAuth({ provider, options: {
            redirectTo: `${location.origin}/auth/callback`
        } });
        if (error) throw error;
        return data;
    }

    static async signOut() {
        const supabase = client();
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    }

    static async getCurrentUser() {
        const supabase = client();
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        return user;
    }
}