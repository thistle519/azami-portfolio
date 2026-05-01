import { getNotes } from '@/lib/data';
import NoteClient from './NoteClient';

export default function NotePage() {
  const notes = getNotes();
  return <NoteClient notes={notes} />;
}
