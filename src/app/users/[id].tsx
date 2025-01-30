import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  return <div>      User {router.query.slug}</div>
}

export default User
