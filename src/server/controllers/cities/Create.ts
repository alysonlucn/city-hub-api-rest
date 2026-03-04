import { Request, Response } from "express"; 

interface ICity {
    name: string;
};

export const create = (req: Request, res: Response) =>{
    const data: ICity = req.body;

    console.log(data.name);

    return res.send("Create city");
};