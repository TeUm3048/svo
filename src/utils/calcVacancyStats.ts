interface VacancyStats {
    total: number;
    values: number[];
    labels: string[];
}

const calcVacancyStats = (vacancies: any[]): VacancyStats => {
    console.log(vacancies, "Ваааакансииии!!!");
    if (!vacancies) {
        return {
            total: 0,
            values: [],
            labels: []
        };
    }

    const total = vacancies.length;
    const filtered = vacancies
        .filter(vacancy => vacancy.salaryFrom || vacancy.salaryUpTo)
        .filter((value, index, self) => {
            return self.findIndex((t) => t.name === value.name && t.job === value.job && t.salary === value.salary) === index;
        })


    const values = filtered.map(vacancy => {
        const from = vacancy.salaryFrom || 0;
        const upTo = vacancy.salaryUpTo || 0;
        return (from + upTo) / 2;
    });
    const labels = filtered.map(vacancy => vacancy.name);

    return {
        total,
        values,
        labels
    };
};

export default calcVacancyStats;