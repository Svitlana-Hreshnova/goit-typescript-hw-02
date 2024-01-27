interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

interface PageProps extends ComponentProps {
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}