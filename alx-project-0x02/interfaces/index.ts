export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  id?: number;
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface Post {
  id?: number;
  title: string;
  content: string;
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
}

/**
 * PostProps used by PostCard and posts listing
 */
export interface PostProps {
  id?: number;
  title: string;
  content: string;
  userId: number;
}
