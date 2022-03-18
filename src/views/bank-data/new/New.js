import React, { useState } from 'react'
import {
  CButton,
  CFormFeedback,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CFormSelect,
  CImage,
} from '@coreui/react'
import { addNewInstitution, uploadFile } from 'src/api/api'

const New = () => {
  const [image, setImage] = useState('')
  const [value, setValue] = useState({
    name: '',
    altText: '',
    min_maxLoan: 0,
    loanValue: 0,
    min_maxTerm: 0,
    termStep: 0,
    rating: 0,
    min_maxInterest: 0,
    interestRate: 0,
    buttonLink: '',
    adminFees: 0,
    freeBananas: '',
    dailyNewspapers: '',
    meetPenguins: '',
    eatMoreFruit: '',
    exampleContent: '',
    hideBank: false,
    hideLink: false,
    sponsored: false,
  })

  const options = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
    { label: 'Four', value: 4 },
    { label: 'Five', value: 5 },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addNewInstitution({ ...value, logo: image })
  }

  const handleImage = async (e) => {
    const r = await uploadFile(e.target.files[0])
    if (r) {
      setImage(r)
    }
  }

  const handleChange = (e) => {
    const target = e.target
    const r = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setValue({ ...value, [name]: r })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add a new Bank Data</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-5 align-items-center">
              <CCol md={6} className="mt-2">
                <CFormLabel htmlFor="formFile">Logo</CFormLabel>
                <CFormInput
                  type="file"
                  id="formFile"
                  accept="image/*"
                  onChange={async (e) => await handleImage(e)}
                />
              </CCol>
              <CCol md={5} className="mt-2">
                <h5>Logo Preview</h5>
                <div className="div-logo d-flex  align-items-center justify-content-center">
                  {!image ? null : (
                    <CImage height={130} width={130} src={image} alt="logo" className="img-fluid" />
                  )}
                </div>
              </CCol>
            </CRow>
            <CForm className="row g-3 needs-validation pt-2" onSubmit={handleSubmit}>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Name</CFormLabel>
                <CFormInput type="text" value={value.name} name="name" onChange={handleChange} />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Logo URL</CFormLabel>
                <CFormInput
                  type="text"
                  value={image}
                  disabled
                  name="logoURL"
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Alt text</CFormLabel>
                <CFormInput
                  type="text"
                  value={value.altText}
                  name="altText"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom01">Min/Max(loan values)</CFormLabel>
                <CFormInput
                  type="number"
                  value={value.min_maxLoan}
                  name="min_maxLoan"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Loan values</CFormLabel>
                <CFormInput
                  type="number"
                  value={value.loanValue}
                  name="loanValue"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom01">Min/Max (term step value)</CFormLabel>
                <CFormInput
                  type="number"
                  id="validationCustom01"
                  value={value.min_maxTerm}
                  name="min_maxTerm"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom01">Term step value</CFormLabel>
                <CFormInput
                  type="number"
                  value={value.termStep}
                  name="termStep"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Rating</CFormLabel>
                <CFormSelect onChange={handleChange} name="rating" value={value.rating}>
                  <option>Open this select menu</option>
                  {options.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.value}
                    </option>
                  ))}
                </CFormSelect>
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Min/Max</CFormLabel>
                <CInputGroup>
                  <CInputGroupText id="basic-addon1">%</CInputGroupText>
                  <CFormInput
                    type="number"
                    value={value.min_maxInterest}
                    name="min_maxInterest"
                    onChange={handleChange}
                    required
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Interest rate</CFormLabel>
                <CInputGroup>
                  <CInputGroupText id="basic-addon1">%</CInputGroupText>
                  <CFormInput
                    type="number"
                    value={value.interestRate}
                    name="interestRate"
                    required
                    onChange={handleChange}
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Button link</CFormLabel>
                <CFormInput
                  type="text"
                  value={value.buttonLink}
                  name="buttonLink"
                  required
                  onChange={handleChange}
                />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4} className="mt-2">
                <CFormLabel htmlFor="validationCustom02">Admin fees</CFormLabel>
                <CInputGroup>
                  <CInputGroupText id="basic-addon1">N</CInputGroupText>
                  <CFormInput
                    type="number"
                    value={value.adminFees}
                    name="adminFees"
                    required
                    onChange={handleChange}
                  />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                </CInputGroup>
              </CCol>
              <h6 className="mt-3 fw-bold"> More information content: </h6>
              <CCol md={3} className="mt-2">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Free Bananas</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={value.freeBananas}
                  name="freeBananas"
                  onChange={handleChange}
                />
              </CCol>
              <CCol md={3} className="mt-2">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Daily Newspapers</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={value.dailyNewspapers}
                  name="dailyNewspapers"
                  onChange={handleChange}
                />
              </CCol>
              <CCol md={3} className="mt-2">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Meet Penguins </CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={value.meetPenguins}
                  name="meetPenguins"
                  onChange={handleChange}
                />
              </CCol>
              <CCol md={3} className="mt-2">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Eat More Fruit</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={value.eatMoreFruit}
                  name="eatMoreFruit"
                  onChange={handleChange}
                />
              </CCol>
              <CCol md={12} className="mt-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Example Content</CFormLabel>
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="2"
                  value={value.exampleContent}
                  name="exampleContent"
                  onChange={handleChange}
                />
              </CCol>
              <h6 className="mt-3 fw-bold"> Options: </h6>
              <CCol md={2}>
                <CFormCheck
                  name="hideBank"
                  type="checkbox"
                  checked={value.hideBank}
                  label="Hide this bank"
                  onChange={handleChange}
                  value={value.hideBank}
                />
              </CCol>
              <CCol sm={3}>
                <CFormCheck
                  label="Sponsored listing"
                  type="checkbox"
                  value={value.sponsored}
                  name="sponsored"
                  checked={value.sponsored}
                  onChange={handleChange}
                />
              </CCol>
              <CCol md={2}>
                <CFormCheck
                  name="hideLink"
                  type="checkbox"
                  checked={value.hideLink}
                  label="Hide link"
                  onChange={handleChange}
                  value={value.hideLink}
                />
              </CCol>
              <CRow className="my-3 text-center">
                <CCol>
                  <CButton type="submit" color="primary" size="lg">
                    Add new institution
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default New
