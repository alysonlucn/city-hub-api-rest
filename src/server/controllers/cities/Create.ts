import { Request, Response } from 'express'; 
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICity {
    name: string;
    state: string;
};

const bodyValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(2),
});

interface IFilter {
    filter?: string;
}

const queryValidation: yup.ObjectSchema<IFilter> = yup.object().shape({
    filter: yup.string().required().min(3),
});





export const createBodyValidation = validation('body', bodyValidation);
export const createQueryValidation = validation('query' ,queryValidation);



export const create = async(req: Request<object, object, ICity>, res: Response) =>{
    console.log(req.body);

    return res.send("Create city");
};