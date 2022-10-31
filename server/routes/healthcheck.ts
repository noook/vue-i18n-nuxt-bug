export default defineEventHandler(() => {
  return {
    status: 'ready',
    updatedAt: new Date().toISOString(),
  };
});
