import { useEffect } from 'react';
import { useHttp } from 'utils/http';
import { useAsync } from 'utils/use-async';

import { Project } from 'screens/project-list/list';
import { cleanObject } from 'utils';

export const useProjects = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>()
  const client = useHttp()
  const fetchProjects = () => client('projects', {data: cleanObject(param || {})})
  useEffect(() => {
    run(fetchProjects(), {
      retry: fetchProjects
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result;
};

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => run(client(`projects/${params.id}`, {
    data: params,
    method: 'PATCH',
  }));

  return {
    mutate,
    ...asyncResult,
  };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => run(client(`projects/${params.id}`, {
    data: params,
    method: 'POST',
  }));

  return {
    mutate,
    ...asyncResult,
  };
};
