// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (req.cookies.authenticated === "yes") {
        res.statusCode = 200
        res.json({ name: 'John Doe' })
      } else {
        res.statusCode = 401
        res.json({ error: 'Authentication Required' })
      }
      resolve()
    }, 1000)
  })
}
