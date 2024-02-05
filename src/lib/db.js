const {username,password}=process.env
export const connectionStr ="mongodb+srv://"+username+":"+password+"@cluster0.insn3qc.mongodb.net/productDB?retryWrites=true&w=majority"