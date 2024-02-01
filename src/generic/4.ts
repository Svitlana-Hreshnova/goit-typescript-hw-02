interface ComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

interface PageProps extends ComponentProps {
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}