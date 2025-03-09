export const Routes = {
  home: '/',
  '2024': '/2024',
  '2025': '/2025',
  Soft2024: '/2024/soft-skills',
} as const;

export type TRoutes = (typeof Routes)[keyof typeof Routes];
