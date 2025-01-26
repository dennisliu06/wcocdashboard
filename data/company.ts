import { db } from "@/lib/db";

export const getCompanyByName = async (name: string) => {
    try {
        const company = await db.company.findUnique({
            where: {
                name
            }
        })

        return company;
    } catch {
        return null
    }
}

export const getCompanyById = async (id: string) => {
    try {
        const company = await db.company.findUnique({
            where: {
                id
            }
        })

        return company
    } catch {
        return null
    }
}