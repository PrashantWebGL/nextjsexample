const {username,password}=process.env
export const connectionStr ="mongodb+srv://"+username+":"+password+"@cluster0.insn3qc.mongodb.net/productDB?retryWrites=true&w=majority"
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL