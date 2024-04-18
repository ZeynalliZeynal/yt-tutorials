import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import { Link } from 'react-router-dom'
import { FormEvent, useRef, useState } from 'react'
import { Tag } from './App.tsx'

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: titleRef.current!.value,
      tags: [],
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Title</Form.Label>
              <CreatableSelect
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id }
                })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" ref={markdownRef} rows={15} />
        </Form.Group>
        <Stack direction="horizontal">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  )
}
