import { Button } from "design-system";

export default function Home() {
  return (
    <div style={{maxWidth: "600px", margin: "auto"}}>
      <h1>The Blog using Multi Zone</h1>
      <a href="/">Home</a>
      <p>Transition between Multi Zone Apps will result in full page reloads since they are separate Apps.</p>
      <h2>About the Blog App</h2>
      <p>The blog is unstyled. In order for this Next.js App to have the same layout/style as the frontend App a shared layout should be created in the packages folder. A UI/design system would benefit here.</p>
      <p>As an alternative, component libraries can benefit in this situation.</p>
      <h2>Shared UI component</h2>
      <p>Shared Button from Packages/Design-System</p>
      <Button />
    </div>
  );
}
