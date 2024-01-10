import ProtectedRoute from '~/components/ProtectedRoute'

export const { routeData, Page } = ProtectedRoute((session) => {
  return (
    <main class="flex flex-col gap-2 items-center">
      <h1>This is a protected route</h1>
  </main>
);
});

export default Page;