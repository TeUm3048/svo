interface VacancyStats {
    total: number;
    values: number[];
    labels: string[];
}

const calcVacancyStats = (vacancies: any[]): VacancyStats => {
    if (!vacancies) {
        return {
            total: 0,
            values: [],
            labels: []
        };
    }

    const total = vacancies.length;
    const filtered = vacancies.filter(vacancy => vacancy.salaryFrom || vacancy.salaryUpTo);

    const values = filtered.map(vacancy => {
        const from = vacancy.salaryFrom || 0;
        const upTo = vacancy.salaryUpTo || 0;
        return (from + upTo) / 2;
    });
    const labels = filtered.map(vacancy => vacancy.title);

    return {
        total,
        values,
        labels
    };
};

export default calcVacancyStats;