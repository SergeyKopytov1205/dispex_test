import { useEffect, useState } from "react"

const useFilterSearch = (data) => {
   const [filteredData, setFilteredData] = useState(data)
   const [value, setValue] = useState('')
   const [validateError, setValidateError] = useState(false)

   useEffect(() => {
      setFilteredData(data)
   }, [data])

   const handleFilter = (event) => {
      const inputValue = event.target.value.toLowerCase();
      setValue(inputValue)
      const newData = data.filter(value => {
         setValidateError(false)
         return inputValue.length === 0 ? data : value.name.toLowerCase().includes(inputValue)
      })
      if (!newData.length) {
         setValidateError(true)
      }
      setFilteredData(newData)
   }

   const handleChoiсe = (value) => {
      setValue(value)
      setFilteredData([])
   }
   return [{ filteredData, value, validateError }, handleFilter, handleChoiсe]
}

export default useFilterSearch