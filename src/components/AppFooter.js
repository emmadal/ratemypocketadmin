import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://ratemypocket.com/" target="_blank" rel="noopener noreferrer">
          RateMyPocket
        </a>
        <span className="ms-1">&copy; {new Date().getFullYear()}.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
