import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Any() {
  const router = useRouter();
  useEffect(() => {
    router.push('/seguro-coletivo');
  }, [router]);
}
