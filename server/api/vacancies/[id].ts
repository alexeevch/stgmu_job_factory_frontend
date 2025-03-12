import vacancies from "../../data/mock/vacancies.json";

export default defineEventHandler((event) => {
  const id = parseInt(event.context.params?.id || "", 10);
  const vacancy = vacancies.find((vacancy) => vacancy.id === id);

  if (!vacancy) {
    throw createError({
      statusCode: 404,
      statusMessage: "Vacancy not found",
    });
  }

  return { data: vacancy };
});
