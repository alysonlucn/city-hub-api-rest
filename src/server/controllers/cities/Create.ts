import { Request, Response } from 'express'; 
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

interface ICity {
    name: string;
    state: string;
};

const bodyValidation: yup.ObjectSchema<ICity> = yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(2),
});

export const create = async(req: Request<{}, {}, ICity>, res: Response) =>{
    let validateData: ICity | undefined;

    try {
       validateData = await bodyValidation.validate(req.body, { abortEarly: false });
    } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors,
        });
    }

    console.log(validateData);

    return res.send("Create city");
};