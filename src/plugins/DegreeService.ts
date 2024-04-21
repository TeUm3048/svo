import degrees from "@/assets/json/degrees.json"

const degreeService = {
    getSkills(degree: string) {
        return degrees.degrees.find((v) => {
            return v.name === degree
        })?.skills;
    },
    getAllDegree() {
        return degrees.degrees.map((v) => {
            return v.name;
        });
    },
}

export default degreeService;