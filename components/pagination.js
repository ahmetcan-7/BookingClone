import React from 'react'
import Pagination from '@material-ui/lab/Pagination'

export default function PaginationRounded() {
  return (
    <div style={{ display: 'flex', justifyContent: 'right', margin: '1rem 0' }}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="small"
        hideNextButton={true}
        hidePrevButton={true}
        boundaryCount={3}
      />
    </div>
  )
}
