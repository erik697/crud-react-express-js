import User from "../models/userModel.js"



export const getUser = async (req,res) =>{
    try{
    const response = await User.findAll();
    res.status(200).json(response)
    }
    catch(err){
    console.log(err.message)
    }
    }
    
    export const getUserById = async (req,res) =>{
        try{
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response)
        }
        catch(err){
        console.log(err.message)
        }
        }

        export const createUser = async (req,res) =>{
            try{
            await User.create(req.body);
            res.status(201).json({msg : "User Created"})
            }
            catch(err){
            console.log(err.message)
            }
            }

            export const updateUser = async (req,res) =>{
                try{
                await User.update(req.body, {
                    where : {
                        id : req.params.id
                    }
                });
                res.status(200).json({msg : "User Updated"})
                }
                catch(err){
                console.log(err.message)
                }
                }

                export const deleteUser = async (req,res) =>{
                    try{
                    await User.destroy({
                        where : {
                            id : req.params.id
                        }
                    });
                    res.status(200).json({msg : "User Deleted"})
                    }
                    catch(err){
                    console.log(err.message)
                    }
                    }
        