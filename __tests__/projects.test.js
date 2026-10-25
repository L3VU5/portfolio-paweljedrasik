import { projectsData } from "../data/projects";
import { singleProjectData } from "../data/singleProjectData";
import { validateMessage } from "../lib/sendMessage";

test("every project card has a detail page", () => {
  for (const { id } of projectsData) {
    expect(singleProjectData[id]).toBeDefined();
  }
});

test("every detail page has an image and a technology list", () => {
  for (const [id, project] of Object.entries(singleProjectData)) {
    expect(project.ProjectImages?.[0]?.img).toBeDefined();
    expect(project.ProjectInfo.Technologies[0].techs.length).toBeGreaterThan(0);
    expect(project.ProjectHeader.title).toBeTruthy();
    expect(id).toMatch(/^\d+$/);
  }
});

describe("validateMessage", () => {
  const valid = {
    name: "Jane",
    email: "jane@example.com",
    subject: "Hello",
    message: "Hi",
  };

  test("accepts a complete message", () => {
    expect(validateMessage(valid)).toBeNull();
  });

  test("rejects missing fields", () => {
    expect(validateMessage({ ...valid, message: "  " })).toMatch(/fill in/i);
  });

  test("rejects a malformed email", () => {
    expect(validateMessage({ ...valid, email: "jane@" })).toMatch(/valid email/i);
  });
});
