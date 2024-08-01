const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        getSingleUser: async (parent, { user }) => {
            const singleUser = await User.findById({id: user._id})
            return singleUser
        }
    },
    Mutation: {
        createUser: async (parent, { user }) => {
            const createUser = await User.create(user)
            if (!createUser) return 'Unable to create user'
            const token = signToken(createUser)
            return { createUser, token }
        },
        loginUser: async (parent, { email, password }, context) => {
            const userProfile = await User.findOne({ email})

            if (!userProfile) return 'No user found'

            const isCorrectPassword = userProfile.isCorrectPassword(password)

            if (!isCorrectPassword) return 'Auth Error'

            const token = signToken(userProfile)
            return { token, userProfile }
        }
    }
}



module.exports = resolvers