import { prisma } from '@/utils/db'
import { auth } from '@clerk/nextjs'

const createNewUser = async () => {
    const { userId } = await auth()
}

const NewUser = () => {
    return (
        <div>
            <h1>New User</h1>
        </div>
    )
}

export default NewUser
