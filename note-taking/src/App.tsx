import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import NewNote from './NewNote.tsx'

type Tag = {
  id: string
  label: string
}

type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

type Note = {
  id: string
} & NoteData

export default function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export type { Note, NoteData, Tag }
