import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CImage,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CModalBody,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTrash, cilPen } from '@coreui/icons'
import { deleteInstitution, getInstitutions } from 'src/api/api'
import { Link } from 'react-router-dom'

const List = () => {
  const [data, setData] = useState([])
  const [spiner, setSpiner] = useState([])
  const [doc, setDoc] = useState(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const r = await getInstitutions()
      setData(r)
    }
    getData()
  }, [])

  const renderModal = (e) => {
    const handleDelete = async () => {
      await deleteInstitution(e?.id)
      setSpiner(!spiner)
      const r = await getInstitutions()
      if (r) {
        setData(r)
        setSpiner(false)
        setVisible(!visible)
      }
    }
    return (
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Delete title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Do you want to delete ? {spiner ? <CSpinner color="success" size="xl" /> : null}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary text-white fw-bold" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton color="danger text-white fw-bold" onClick={handleDelete}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    )
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List of institutions</strong>
          </CCardHeader>
          <CCardBody>
            <CTable hover striped responsive bordered>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Logo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Website</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Rating</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>
                      <CImage
                        src={item.logo}
                        height={80}
                        width={80}
                        alt={item.altText}
                        className="img-fluid"
                      />
                    </CTableDataCell>
                    <CTableDataCell>{item.name}</CTableDataCell>
                    <CTableDataCell>{item.buttonLink}</CTableDataCell>
                    <CTableDataCell>{item.rating}</CTableDataCell>
                    <CTableDataCell className="">
                      <Link to="/edit-institution/">
                        <CIcon className="icon_action" icon={cilPen} size="xl" />
                      </Link>
                      <CIcon
                        className="d-flex icon_action float-end"
                        icon={cilTrash}
                        size="xl"
                        onClick={() => {
                          setVisible(!visible)
                          setDoc(item)
                        }}
                      />
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
              {renderModal(doc)}
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default List
