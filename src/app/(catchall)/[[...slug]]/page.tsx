import DefaultPageContent from '@/src/components/DefaultPageContent.component';

export const revalidate = 0;

export default async function CatchAllPage(props: any) {

  const slug = props.params?.slug ? props.params.slug.join('/') : '/';

  return (
    <DefaultPageContent slug={slug} />
  );
}